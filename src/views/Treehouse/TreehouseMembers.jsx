import { Link } from 'react-router-dom';
import styles from './TreehouseMembers.css';
import members from '../../assets/secret-treehouse-members.jpeg';

export default function TreehouseMembers() {
  return (
    <>
      <Link to="/treehouse">Go back to the Treehouse</Link>
      <img
        src={members}
        alt="Top secret treehouse members"
        className={styles.members}
      />
      <ul>
        <li>Who cares</li>
        <li>Some guy</li>
        <li>I'm sorry for this</li>
        <li>Some other guy</li>
        <li>One of their brothers</li>
      </ul>
    </>
  );
}
