import "./Footer.css"

function Footer () {
    return ( 
      <footer>
        <p>&copy; 2025 Mon Entreprise. Tous droits réservés.</p>
        
        <ul>
            <li>
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="../Assets/facebook.png" alt="Logo Facebook"/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="../Assets/instagram.png" alt="Logo Instagram"/>
                </a>
            </li>
            <li>
                <a href="https://x.com/" target="_blank">
                    <img src="../Assets/X.png" alt="logo X"/>
                </a>
            </li>
        </ul>
      </footer>
    )
} 
export default Footer;