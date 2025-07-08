/* eslint-disable no-unused-vars */
import { Copy, CopyCheck } from "lucide-react"
import {AnimatePresence, motion} from 'motion/react'
import { useState } from "react"

export const CopyEmailButton = () => {
    const [isCopied, setIsCopied] = useState(false);
    const email = 'Email'

    const copyToClipboard = () => {
        navigator.clipboard.writeText(email);
        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false);
        }, 5000)
    }

  return (
       <motion.button className="relative px-1 py-4 text-sm text-center
        rounded-full font-extralight bg-primary w-[12rem]
         cursor-pointer overflow-hidden"
         onClick={copyToClipboard}
         whileHover={{y: -5}}
         whileTap={{scale: 1.05}}
         >
        <AnimatePresence>
        {isCopied ? 
            <motion.p className="flex items-center justify-center gap-2"
             initial= {{opacity: 0, y: -10}}
             animate= {{opacity: 1, y: 0}}
             exit={{opacity: 0, y: -10}}
             transition={{duration: 0.1, ease: 'easeInOut'}}
             key= 'copied'
            >
            <CopyCheck />
            Email Address Copied
            </motion.p>
            :
            <motion.p className="flex items-center justify-center gap-2"
            initial= {{opacity: 0}}
            animate= {{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.1}}
            key= 'copied'
            >
            <Copy />
            Copy Email Address
            </motion.p>
        }
        </AnimatePresence>
       </motion.button> 
  )
}

