import React from 'react';
import styled from "styled-components";
import Title from './Title';
import  { useRef } from 'react';
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { contactAnimation } from "animation";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_s7vu4n3', 'template_q0syr2n', form.current, '4jByRmDfitmXRlMnu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  const [element, controls] = useScroll();
  return (
    <Section id="contact" ref={element}>
      <Title value="contact" />
      <motion.div className="contact"
      variants={contactAnimation}
      animate={controls}
      transition={{
        delay: 0.03,
        type: "tween",
        duration: 0.8,
      }}
      >
        <div className="contact__title">
          <p>Stay in touch with me </p>
          <h2>Quick Contact</h2>
        </div>
        <div className="contact__data">
          <div className="contact__data__description">
            <h4>Just to say hi !!</h4>
            <p>
              If you have any questions simply use the following contact details.
            </p>
            <div>
              <p>
                <strong>Address:</strong> 5322-A Queen Mary,
Montréal, QC. H3X 1T7
              </p>
              <p>
                <strong>Email:</strong>  eyeline5322a@gmail.com
              </p>
              <p>
                <strong>Website:</strong> www.eyelinesolon.com
              </p>
              <p>
                <strong>contact:</strong> +1 5144438594
              </p>
            </div>
          </div>
            <form ref={form} onSubmit={sendEmail}>
          <div className="contact__data__form">
            <input type="text" placeholder='name' required/>
            <input type="email" placeholder='email' required />
            <textarea name="message" placeholder='message' required></textarea>
            <button type='submit'>Send Message</button>
          </div>
            </form>
        </div>
      </motion.div>
    </Section>
  )
}

const Section = styled.section`
min-height: 100vh;
.contact {
  color: var(--primary-color);
  margin: 0 18rem;
  &__title {
    margin: 6rem 0 2rem 0;
    p {
      text-transform: uppercase;
      color: var(--primary-color);
    }
    h2 {
      font-size: 2rem;
      color: var(--secondary-color);
    }
  }
  &__data {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 4rem;
    &__description {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      h4 {
        font-size: 1.5rem;
      }
      p {
        text-align: justify;
        margin-top: 20px;
      }
      div {
        p {
          strong {
            text-transform: uppercase;
          }
        }
      }
    }
    &__form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
      input,
      textarea {
        text-transform: uppercase;
        border: none;
        border-bottom: 0.1rem solid var(--secondary-color);
        width: 100%;
        color: var(--secondary-color);
        padding-bottom: 0.7rem;
        &:focus {
          outline: none;
        }
        &::placeholder {
          color: var(--secondary-color);
        }
      }
      textarea {
        width: 100%;
        height: 50%;
        resize: none;
      }
      button {
        width: 100%;
        background-color: transparent;
        border: 0.1rem solid var(--secondary-color);
        height: 3rem;
        color: var(--secondary-color);
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.5s ease-in-out;
        &:hover {
          background-color: var(--secondary-color);
          color: #fff;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .contact {
    margin: 1rem;
    padding: 0 1rem;
    &__title {
      margin: 0;
      text-align: center;
      p {
        font-size: 0.8rem;
      }
      h2 {
        font-size: 1.3rem;
      }
    }
    &__data {
      grid-template-columns: 1fr;
      margin: 0;
      p {
        text-align: left;
      }
      &__form {
        button {
          height: 6rem;
        }
      }
    }
  }
}
`;

export default Contact