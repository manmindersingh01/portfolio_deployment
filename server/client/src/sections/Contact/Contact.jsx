import styles from './ContactStyles.module.css';
import { useState } from 'react';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="" onSubmit={onSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            //value={name}
            // onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        {/* <div>
          <div className="formGroup">
            <label htmlFor="message" className='' hidden>
              Message
            </label>

            <textarea className=' text-slate-100 '
              name="message"
              id="message"
              placeholder="Message"
              required>
            </textarea>
          </div>
        </div> */}
        <div className=' border-2 border-slate-600 rounded-xl h-72 text-slate-50 flex flex-col justify-center gap-2 '>
          <label className=' m-2' htmlFor="message">message</label>
          <textarea placeholder='write your message here ...' required className=' border-none p-2 m-4 active:border-none focus:outline-none '
            name="textMessage"
            //value={message}
            // onChange={(e) => setMessage(e.target.value)} 
            id="">

          </textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
