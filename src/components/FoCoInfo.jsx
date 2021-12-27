const ContainerInfo = () => {
  return (
    <div className="col-lg-8 col-xl-9">
      <div className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="block" href="#1">
            <div className="block-content block-content-full d-flex justify-content-between align-items-center">
              <div className="py-2 mx-auto text-center">
                <img
                  src="https://fcmod.org/wp-content/uploads/2020/09/City-of-Fort-Collins-Logo-Maya-Blue-300x124.png"
                  width={112}
                  alt="Fort Collins Logo"
                  className="mx-auto img-fluid"
                />
                <div className="text-muted text-uppercase font-size-sm font-weight-bold">
                  Colorado, USA
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="block" href="#1">
            <div className="block-content text-center block-content-full d-flex justify-content-center align-items-center">
              <div className="py-2">
                <div className="text-white font-size-sm font-weight-bold">
                  <h5>Best City for Cycling</h5>
                  <i class="las la-biking text-warning font-size-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="block" href="#1">
            <div className="block-content text-center block-content-full d-flex justify-content-center align-items-center">
              <div className="py-2">
                <div className="text-white font-size-sm font-weight-bold">
                  <h5>State Craft Beer Capital</h5>
                  <i class="las la-beer text-warning font-size-xl"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- END Stats --> */}

      {/* <!-- Description views --> */}
      <div className="block">
        <div className="block-content bg-black-10">
          <h3 className="font-size-sm text-muted font-weight-bold text-uppercase mb-0">
            <i class="las la-comment"></i> DESCRIPTION
          </h3>
        </div>
        <div className="block-content">
          <p>
            Fort Collins was founded as a military fort in 1864 and referred to
            as "Camp Collins." The post was given the name in honor of Lt. Col.
            William 0. Collins, the popular commander of Ohio Cavalry troops
            whose headquarters were at Fort Laramie. Fort Collins was
            incorporated as a town in 1873.
          </p>
          <p>
            Located in northern Colorado, Fort Collins is home to Colorado State
            University and an outstanding public school system. Nestled at the
            base of the Rocky Mountains, Fort Collins offers exciting
            recreational opportunities, unique cultural offerings, and is a
            regional center for employment and shopping.
          </p>
          <p>
            Throughout the year, live music and entertainment, as well as great
            local dining, can be found throughout the historic downtown area.
          </p>
          <p>
            Fort Collins offers the convenience of a small town with all the
            amenities of a larger city. If you are seeking the Colorado
            lifestyle and a community in which you can reinvent and reinvigorate
            yourself then Fort Collins is your city.
          </p>
        </div>
        <div className="block-content bg-black-10">
          <div className="row text-center">
            <div className="col-sm-4 py-3 m-auto">
              <img
                className="img-fluid img-animal"
                src="http://res.cloudinary.com/simpleview/image/upload/v1525808777/clients/fortcollinsco/Old_Town_Fort_Collins_from_sunset_lounge_27174f0c-e650-42b7-8840-2fa9bd375fd9.jpg"
                alt="Old Town"
              />
            </div>
            <div className="col-sm-4 py-3 m-auto">
              <img
                className="img-fluid img-animal "
                src="https://cdn.britannica.com/04/166204-050-205EC896.jpg"
                alt="Mountains"
              />
            </div>
            <div className="col-sm-4 py-3 m-auto">
              <img
                class="img-fluid img-animal "
                src="https://cdn2.hubspot.net/hubfs/2172371/Assets%20-%20post%202020/04-Stock-Images/04a-Stock-Photos/f-Mountains-Estes-Park.jpg"
                alt="Reservoir"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Description views --> */}

      {/* <!-- MAP views --> */}
      <div className="block">
        <div className="block-content bg-black-10">
          <h3 className="font-size-sm text-muted font-weight-bold text-uppercase mb-0">
            <i class="las la-crosshairs"></i> WHERE CAN FOUND THEM
          </h3>
        </div>
        <div>
          <iframe
            title="Fort Collins"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97002.2006481008!2d-105.13769193008442!3d40.55663730225991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a4590f030ad%3A0xa9b14228b4ab4082!2sFort%20Collins%2C%20CO!5e0!3m2!1sen!2sus!4v1640371639043!5m2!1sen!2sus"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="block-content bg-black-10">
          <div className="row text-center">
            <div className="col-sm-4 py-3">
              <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                Population
              </div>
              <div className="text-black font-size-lg font-weight-bold">
                174,871
                <p className="font-size-sm font-weight-normal">(2020)</p>
              </div>
            </div>
            <div className="col-sm-4 py-3">
              <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                Altitude
              </div>
              <div className="text-black font-size-lg font-weight-bold">
                5,000 ft.
                <p className="font-size-sm font-weight-normal">
                  above sea level
                </p>
              </div>
            </div>
            <div className="col-sm-4 py-3">
              <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                Weather
              </div>
              <div className="text-black font-size-lg font-weight-bold">
                +300
                <p className="font-size-sm font-weight-normal">
                  days of sunshine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerInfo;
