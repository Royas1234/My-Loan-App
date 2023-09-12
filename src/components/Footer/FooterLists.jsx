import React from "react";
import styles from "./Footer.module.css";
import LinkedIn from "../../Images/linkedIn.svg";
import Instagram from "../../Images/instagram.svg";
import Twitter from "../../Images/twitter.svg";

const FooterLists = () => {
 const footerItems = [
  {
   title: "Resources",
   items: [
    { name: "Blog", link: "/blog" },
    { name: "FAQ", link: "/pricing" },
    { name: "Help Center", link: "/help" },
    { name: "Contact Us", link: "/contact" },
   ],
  },
  {
   title: "General",
   items: [
    { name: "Users", link: "#users" },
    { name: "Admin", link: "/pricing" },
    { name: "Team", link: "/aboutUs" },
    { name: "Lending", link: "/contact" },
   ],
  },
  {
   title: "Company",
   items: [
    { name: "About Us", link: "/aboutUs" },
    { name: "Careers", link: "/careers" },
    { name: "Privacy Policy", link: "/privacy" },
    { name: "Terms of Use", link: "/terms" },
   ],
  },
 ];

 const footerItem = footerItems.map((item, index) => (
  <ul key={index}>
   <h4>{item.title}</h4>
   <div className={styles.lists}>
    {item.items.map((listItem, listItemIndex) => (
     <li key={listItemIndex}>
      <a href={listItem.link}>{listItem.name}</a>
     </li>
    ))}
   </div>
  </ul>
 ));

 return (
  <div className={styles.footerLists}>
   {footerItem}
   <ul>
    <h4>Contact</h4>
    <div className={styles.lists}>
     <li>loanwise@gmail.com</li>
     <li>
      +123-457-789-00
      <br />
      +123-457-789-00
     </li>
     <li>
      123, Numberone Avenue,
      <br />
      VI, Lagos.
     </li>
     <li>
      <a href="/">
       <img key="linkedin" src={LinkedIn} alt="LinkedIn" />
      </a>
      <a href="/">
       <img key="instagram" src={Instagram} alt="Instagram" />
      </a>
      <a href="/">
       <img key="twitter" src={Twitter} alt="Twitter" />
      </a>
     </li>
    </div>
   </ul>
  </div>
 );
};

export default FooterLists;
