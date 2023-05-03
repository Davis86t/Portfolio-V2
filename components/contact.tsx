import ContactAnimation from "./animations/contact-animation"
import ContactForm from "./ui/form"

export default function Contact() {
  return (
    <div
      id="contact"
      className="z-0 grid h-[calc(100vh-64px)] pt-5 md:pt-20 w-[100%]"
    >
      <section className="container grid">
        <div className="flex flex-col items-start gap-5">
          <div className="flex max-w-[980px] flex-col items-start pb-1 md:mb-0 mb-6">
            <ContactAnimation />
          </div>
          <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl">
            This contact form data is sent to my personal email address via{" "}
            <a
              href="https://getform.io/"
              target="_blank"
              className="underline"
            >
              getform.io
            </a>
            . I will not use your email address for any other purpose than to
            reply to your message.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
