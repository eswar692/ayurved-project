import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 1000 * 5);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="hidden">Open</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] w-full h-auto flex items-center justify-center bg-white">
        <DialogHeader className="w-full">
          <DialogTitle className="text-center">
            Contact Ayurvedic Guruji
          </DialogTitle>
          <DialogDescription className="w-full  flex justify-center">
            <form
              action="https://formspree.io/f/mvgaznyw"
              method="POST"
              className="flex flex-col gap-2 w-[100%] h-auto "
            >
              <input
                required
                type="text"
                name="name"
                className="border border-gray-400 rounded-md p-2 focus:border-2 focus:border-black placeholder:text-black/40"
                placeholder="Enter your name"
              />
              <input
                required
                type="email"
                name="email"
                className="border border-gray-400 rounded-md p-2 focus:border-2 focus:border-black placeholder:text-black/40"
                placeholder="Enter your email"
              />
              <textarea
                id="message"
                name="message"
                className="border border-gray-400 rounded-md p-2 h-32 focus:border-2 focus:border-black placeholder:text-black/40"
                placeholder="Enter your message"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md p-2 mt-3"
              >
                Submit
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
