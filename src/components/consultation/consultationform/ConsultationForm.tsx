import { useState, FormEvent } from "react";
import styles from "./ConsultationForm.module.css";
import { useTranslations } from "next-intl";
import Container from "@/components/ui/container/Container";

type Status = "idle" | "loading" | "success" | "error";

export default function ConsultationForm() {
  const t = useTranslations("ConsultationForm");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <header className={styles.header}>
            <h2>{t("heading")}</h2>
            <p>{t("intro")}</p>
          </header>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="fullName">{t("name")} *</label>
              <input id="fullName" name="fullName" type="text" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">{t("email")} *</label>
              <input id="email" name="email" type="email" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">{t("phone")} *</label>
              <input id="phone" name="phone" type="tel" required />
            </div>
            
            <div className={styles.field}>
              <label htmlFor="url">{t("url")} *</label>
              <input id="url" name="url" type="text" required />
            </div>

            <div className={styles.field}>
              <label htmlFor="company">{t("company")}</label>
              <input id="company" name="company" type="text" />
            </div>

            <div className={styles.field}>
              <label htmlFor="description">{t("description")} *</label>
              <textarea
                id="description"
                name="description"
                rows={6}
                placeholder={t("message")}
                required
              />
            </div>

            <button type="submit" className={styles.button} disabled={status === "loading"}>
              {status === "loading" ? t("sending") : t("submit")}
            </button>

            {status === "success" && (
              <p className={styles.success}>{t("success")}</p>
            )}
            {status === "error" && (
              <p className={styles.errorMessage}>{t("error")}</p>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}