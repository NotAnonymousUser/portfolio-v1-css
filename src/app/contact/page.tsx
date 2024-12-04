"use client";

import { FormEvent, useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.sendForm(
        "service_0ycxrve",
        "template_08ssf64",
        formRef.current,
        "nhR22exBIEFLAuzaO"
      );

      if (result.text === "OK") {
        setSubmitStatus("success");
        formRef.current.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to send email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <section className="section">
        <div className="glow" style={{ bottom: "20%", right: "20%" }} />

        <div className={styles.contact}>
          <h1 className={styles.title}>Get in Touch</h1>

          <div className={styles.content}>
            <div className={styles.info}>
              <p className={styles.description}>
                I&apos;m currently looking to join a cross-functional team that
                values improving people&apos;s lives through accessible design.
              </p>

              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/NotAnonymousUser"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mubeen-javaid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:mubeen.javed2000@gmail.com"
                  className={styles.socialLink}
                >
                  Email
                </a>
              </div>
            </div>

            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="user_name" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="user_email" required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className={`${styles.submitButton} ${
                  isSubmitting ? styles.submitting : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {submitStatus === "success" && (
                <p className={styles.successMessage}>
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className={styles.errorMessage}>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
