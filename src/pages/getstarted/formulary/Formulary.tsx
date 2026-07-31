"use client";

import styles from "./Formulary.module.css";
import Container from "@/components/ui/container/Container";

export default function Formulary() {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.content}>
          <header className={styles.header}>
            <h2>START YOUR PROJECT</h2>

            <p>
              Tell us about your project, and we'll get back to you with a
              personalized proposal.
            </p>
          </header>

          <form className={styles.form}>

            <div className={styles.field}>
              <label htmlFor="fullName">Full Name *</label>

              <input
                id="fullName"
                type="text"
                // placeholder="John Doe"
                required
              />
            </div>

           <div className={styles.field}>
              <label htmlFor="email">Email Address *</label>

              <input
                id="email"
                type="email"
                // placeholder="john@example.com"
                required
              />
           </div>

            <div className={styles.field}>
              <label htmlFor="phone">Phone Number *</label>

              <input
                id="phone"
                type="tel"
                // placeholder="(123) 456-7890"
                required
              />
           </div>

           <div className={styles.field}>
              <label htmlFor="company">Company (Optional)</label>

              <input
              id="company"
              type="text"
              // placeholder="NaLabs"
              />
           </div>

           <div className={styles.field}>
              <label htmlFor="projectType">Project Type *</label>

              <select id="projectType" defaultValue="New Website">
              <option>New Website</option>
              <option>Website Redesign</option>
              <option>E-commerce</option>
              <option>Other</option>
              </select>
           </div>

           <div className={styles.field}>
              <label htmlFor="description">
              Project Description *
              </label>

              <textarea
              id="description"
              rows={6}
              placeholder="Tell us about your business, your project, and any ideas you'd like to include..."
              required
              />
           </div>

            <button type="submit" className={styles.button}>
              Request a Quote
            </button>
            </form>
        </div>
      </Container>
    </section>
  );
}