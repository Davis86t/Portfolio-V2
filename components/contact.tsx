import ContactAnimation from "./animations/contact-animation"
import ContactForm from "./ui/form"

export default function Contact() {
  return (
    <div
      
      className="z-0 flex h-[100vh] sm:h-[calc(100vh-65px)] w-[100%] flex-col items-center justify-center"
    >
      <section className="container flex flex-col gap-4">
        <div className="flex max-w-[980px] flex-col items-start ">
          <ContactAnimation />
          <p id="contact" className="max-w-[700px] text-sm text-slate-700 dark:text-slate-400 md:text-xl">
            This message will be sent to my personal email address via{" "}
            <a href="https://getform.io/" target="_blank" rel="noreferrer" className="underline">
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
