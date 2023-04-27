import ContactAnimation from "./animations/contact-animation"

export default function ContactForm() {
  return (
    <div
      id="contact"
      className="z-0 grid h-[calc(100vh-64px)] pt-5 md:pt-20 w-[100%]"
    >
      <section className="container grid">
        <div className="flex flex-col items-start gap-6">
          <div className="flex max-w-[980px] flex-col items-start pb-1 md:mb-0 mb-6">
            <ContactAnimation />
            <p className="max-w-[700px] text-md text-slate-700 dark:text-slate-400 md:text-xl">
              This will be a contact form.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
