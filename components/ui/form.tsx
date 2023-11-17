import { useRef } from "react"
import * as Form from "@radix-ui/react-form"

import { buttonVariants } from "./button"
import { Input } from "./input"
import { Textarea } from "./textarea"

export default function ContactForm() {
  const emailInputRef = useRef<HTMLInputElement>(null)
  const messageInputRef = useRef<HTMLTextAreaElement>(null)

  async function handleSubmit(event) {
    event.preventDefault() // Prevent the default form submission

    // Check if the form is valid
    if (event.target.checkValidity()) {
      // Create a new FormData object and populate it with form values
      const formData = new FormData(event.target)

      try {
        // Send the form data to getform.io
        const response = await fetch(
          "https://getform.io/f/3ef8c6a3-a613-4094-b13e-08068ffe7d96",
          {
            method: "POST",
            body: formData,
          }
        )

        // Check if the response is ok (status code 200-299)
        if (response.ok) {
          // Form submission was successful, clear the fields
          emailInputRef.current.value = ""
          messageInputRef.current.value = ""
          // You can also provide user feedback here
          console.log("Form submitted successfully")
        } else {
          // Handle server errors here
          console.error("Form submission failed:", response.status)
        }
      } catch (error) {
        // Handle network errors here
        console.error("Form submission failed:", error)
      }
    } else {
      // If the form is not valid, do not clear the fields
      console.log("Form is not valid.")
    }
  }

  return (
    <Form.Root className="mb-2 w-full md:max-w-[700px]" onSubmit={handleSubmit}>
      <Form.Field className="mb-[10px] grid md:max-w-[350px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-600 dark:text-slate-100">
            Email
          </Form.Label>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Please enter your email
          </Form.Message>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Input
            type="email"
            name="email"
            autoComplete="email"
            ref={emailInputRef}
            required
          />
        </Form.Control>
        <input type="hidden" name="_gotcha" className="!hidden"></input>
      </Form.Field>
      <Form.Field className="mb-[10px] grid" name="message">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-slate-600 dark:text-slate-100">
            Message
          </Form.Label>
          <Form.Message
            className="text-[13px] text-white opacity-[0.8]"
            match="valueMissing"
          >
            Please enter a message
          </Form.Message>
        </div>
        <Form.Control asChild>
          <Textarea name="message" ref={messageInputRef} required />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className={buttonVariants({ size: "lg" })} type="submit">
          Send
        </button>
      </Form.Submit>
    </Form.Root>
  )
}
