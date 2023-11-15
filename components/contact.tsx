import ContactAnimation from "./animations/contact-animation"
import ContactForm from "./ui/form"

export default function Contact() {
  return (
    <div
      id="contact"
      className="z-0 flex h-[calc(100dvh-65px)] max-h-[900px] min-h-[500px] flex-col justify-center border-b border-b-slate-200 py-16 dark:border-b-slate-700"
    >
      <section className="container flex h-full flex-col justify-center gap-6">
        <div className="flex flex-col items-start">
          <ContactAnimation />
          <p className="max-w-[700px] text-sm text-slate-700 dark:text-slate-400 md:text-xl">
            This message will be sent to my personal email address.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
