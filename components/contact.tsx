import ContactAnimation from "./animations/contact-animation"
import ContactForm from "./ui/form"

export default function Contact() {
  return (
    <div
      id="contact"
      className="z-0 flex h-[100vh] flex-col items-center justify-center"
      // style={{
      //   height: `calc(100vh - 65px - env(safe-area-inset-top) - env(safe-area-inset-bottom))`,
      // }}
    >
      <section className="container flex flex-col gap-4">
        <div className="flex max-w-[980px] flex-col items-start">
          <ContactAnimation />
          <p className="max-w-[700px] text-sm text-slate-700 dark:text-slate-400 md:text-xl">
            This message will be sent to my personal email address via{" "}
            <a
              href="https://getform.io/"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              getform.io
            </a>
            . I will not use your email address for any other purpose than to
            reply to your message.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
