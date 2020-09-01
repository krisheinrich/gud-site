import React from 'react';
import Modal from './Modal.jsx';

export default function MailChimpModal({ show, onClose }) {
  return (
    <Modal show={show} onClose={onClose}>
      <div id="mc_embed_signup">
        <form action="https://dev.us17.list-manage.com/subscribe/post?u=98ea3afa12eb28e1ad4815389&amp;id=abd17d478b" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" noValidate>
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to the Ground Up Dev Newsletter for announcements, exclusive offers and more! </h2>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" defaultValue="" name="FNAME" className="" id="mce-FNAME" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">Email Address </label>
              <input type="email" defaultValue="" name="EMAIL" className="required email" id="mce-EMAIL" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: "none" }}/>
              <div className="response" id="mce-success-response" style={{ display: "none" }}/>
            </div> {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input type="text" name="b_98ea3afa12eb28e1ad4815389_abd17d478b" tabIndex="-1" defaultValue=""/>
            </div>
            <div className="clear">
              <input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
}
