import React, { Component } from 'react';

const divStyle = {
  position: 'absolute',
  left: '-5000px'
};

export default function MailChimp() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us20.list-manage.com/subscribe/post?u=a239d4b05f1fb26556d1b4349&amp;id=3166608bc7"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            value=""
            name="EMAIL"
            class="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />

          <div style={divStyle} aria-hidden="true">
            <input
              type="text"
              name="b_a239d4b05f1fb26556d1b4349_3166608bc7"
              tabindex="-1"
              value=""
            />
            >
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
