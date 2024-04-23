import styles from "./headinglinks.module.scss";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiOutlineInstagram,AiFillLinkedin
} from "react-icons/ai";
import { BsTelegram, BsDiscord } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";

export const MyLinks = () => {
  return (
    <div className={styles.links}>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://github.com/dhawalbisht" target="_blank" rel="nofollow">
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>
      {/* <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://discordapp.com/users/503152077824851968" target="_blank" rel="nofollow">
          <BsDiscord size="2.4rem" />
        </Link>
      </motion.span> */}
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link href="https://t.me/dhawalbisht" target="_blank" rel="nofollow">
          <BsTelegram size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="https://www.linkedin.com/in/dhawal-bisht/" target="_blank" rel="nofollow">
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link href="https://www.instagram.com/dhawal_bisht/" target="_blank" rel="nofollow">
          <AiOutlineInstagram size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
