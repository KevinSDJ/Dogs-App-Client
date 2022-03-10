import React from 'react';
import './footer.scss'



export default function Footer() {
	return(<>
		<footer className="footer">
		   <div className="footer__contain">
		     <div className="footer__links">
		        <a className="linkFooter linkFooter_github" href={"https://github.com/KevinSDJ"} target="_blank" aria-label="github_icon" rel="noopener noreferrer" aria-hidden="true"/>
                <span className="whitetext">&nbsp;|&nbsp;</span>
                <a className="linkFooter linkFooter_linkedin"  href={"https://www.linkedin.com/in/kevin-sebastian-de-jesus"} target="_blank" aria-label="linkedin_icon" rel="noopener noreferrer" aria-hidden="true" />
                <span className="whitetext">&nbsp;|&nbsp;</span>
                <a className="linkFooter linkFooter_instagram"  href={"https://www.linkedin.com/in/kevin-sebastian-de-jesus"} target="_blank" aria-label="instagram_icon" rel="noopener noreferrer" aria-hidden="true"/>
                <span className="whitetext">&nbsp;|&nbsp;</span>
                <a className="linkFooter linkFooter_twitter"  href={"https://www.linkedin.com/in/kevin-sebastian-de-jesus"} target="_blank" aria-label="twitter_icon" rel="noopener noreferrer"  aria-hidden="true"/>
		     </div>
		     <hr/>
		     <div className="footer___author">
		     	<p className="whitetext">Created by <strong>Kevin Sebastian De jesus</strong></p>
		     </div>
		   </div>	
		</footer>
		</>)
}