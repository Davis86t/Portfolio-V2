import ContactAnimation from "./animations/contact-animation"
import ContactForm from "./ui/form"

export default function Contact() {
  return (
    <div
      id="contact"
      className="z-0 flex h-[calc(100dvh-65px)] max-h-[1280px] flex-col justify-center border-b border-b-slate-200 py-16 dark:border-b-slate-700 sm:min-h-[680px]"
    >
      <section className="container flex h-full flex-col justify-center gap-6">
        <div className="flex flex-col items-start">
          <ContactAnimation />
          <p className="max-w-[700px] pt-3 text-sm text-slate-700 dark:text-slate-400 md:text-xl">
            Enter your email below and let&apos;s start a conversation. Your
            message will be sent straight to my inbox, and I&apos;ll be in
            touch.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
