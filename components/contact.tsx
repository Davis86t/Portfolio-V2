import ContactAnimation from "./animations/contact-animation"
import ContactForm from "./ui/form"

export default function Contact() {
  return (
    <div
      id="contact"
      className="z-0 h-screen"
      style={{
        height: `calc(100vh - 65px)`
      //   height: `calc(100vh - 65px - env(safe-area-inset-top) - env(safe-area-inset-bottom))`,
      }}
    >
      <section className="container flex h-full flex-col justify-center gap-6 sm:max-h-[1080px]">
        <div className="flex flex-col items-start">
          <ContactAnimation />
          <p className="max-w-[700px] text-sm text-slate-700 dark:text-slate-400 md:text-xl">
            This message will be sent to my personal email address. I will not
            use your email address for any other purpose than to reply to your
            message.
          </p>
        </div>
        <ContactForm />
      </section>
    </div>
  )
}
