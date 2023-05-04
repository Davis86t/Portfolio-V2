import { useRef } from "react";
import * as Form from "@radix-ui/react-form";
import { buttonVariants } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

export default function ContactForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function handleSubmit(event) {
    await delay(1000);
    // Clear the input values
    emailInputRef.current.value = "";
    messageInputRef.current.value = "";
  }

  return (
    <Form.Root
      className="w-full md:max-w-[700px] mb-2"
      action="https://getform.io/f/3ef8c6a3-a613-4094-b13e-08068ffe7d96"
      method="POST"
    >
      <Form.Field className="md:max-w-[350px] grid mb-[10px]" name="email">
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
          <Input type="email" name="email" ref={emailInputRef} required />
        </Form.Control>
        <input type="hidden" name="_gotcha" className="!hidden"></input>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="message">
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
        <button
          className={buttonVariants({ size: "lg" })}
          type="submit"
          onClick={handleSubmit}
        >
          Send
        </button>
      </Form.Submit>
    </Form.Root>
  );
}

