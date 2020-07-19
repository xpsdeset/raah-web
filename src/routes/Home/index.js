import React from "react"

let path = "/"

function Component() {
  return (
    <div>
      <div className="homepage green_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="flex_container">
                <div className="text_panel">
                  <h2>Want to be heard?</h2>
                  <p>
                    In the world of social media, there are few mediums which
                    allows you to freely talk about your problems and
                    frustrations.
                    <br />
                    You need a place which doesn't hold your secrets against you
                    <br />A place which doesn't judge you by your race, gender,
                    age or sexual orientation, but rather tries to understand
                    you.
                    <br />
                    We connect you with you.
                  </p>
                  <h2>What is Raah?</h2>
                  <p>
                    You can either talk about anything on your mind and our
                    system finds a buddy for you
                    <br />
                    Or
                    <br />
                    You can give your time to someone who wants to be heard.
                  </p>
                  <div className="clearfix"></div>
                </div>
                <div className="img_panel">
                  <img src="/images/laptop_with_hand.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage blue_bg">
        <div className="container">
          <div className="row flex_container">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="text_img_panel">
                <div className="text_panel">
                  <h2>Chat & forget</h2>
                  <p>
                    We don't store any thing. Your conversations are delivered
                    to your buddy and forgotten.
                  </p>
                </div>
                <div className="img_panel">
                  <img src="/images/laptop_with_hand_1.png" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <div className="features">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="thumbnail_with_info">
                      <img src="/images/anonymous.png" />
                      <h4>It's Anonymous</h4>
                      <p>No signups needed, find your buddy without hassle.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 hide">
                    <div className="thumbnail_with_info">
                      <img src="/images/secure.png" />
                      <h4>It's Secure</h4>
                      <p>
                        We keep your identity and your conversations secure.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="thumbnail_with_info">
                      <img src="/images/24X7.png" />
                      <h4>It's 24x7</h4>
                      <p>Someone here hopefully is waiting for you.</p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="thumbnail_with_info">
                      <img src="/images/free.png" />
                      <h4>It's Free!</h4>
                      <p>
                        All the money in the world can't get a good
                        conversation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default {
  path,
  component: Component,
}
