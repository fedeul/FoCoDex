const AnimalInfo = (props) => {
  const { animal } = props;
  return (
    <>
      <div key={animal.id} className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="block d-flex align-items-center" href="#1">
            <div className="block-content w-100 block-content-full d-flex justify-content-between align-items-center">
              <div className="py-2">
                <div className="text-white font-size-lg font-weight-bold text-capitalize">
                  <h4>{animal.name}</h4>
                </div>
                <div className="text-muted text-capitalize font-size-sm">
                  <em>{animal.category}</em>
                </div>
              </div>
              <div className="font-weight-bold text-success font-size-sm py-2">
                <img
                  src={animal.icon}
                  width={64}
                  alt={animal.name}
                  className="animal-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div
            className="block d-flex justify-content-center align-items-center"
            href="#1"
          >
            <div className="block-content text-center block-content-full d-flex justify-content-center align-items-center">
              <div className="py-2">
                <div className="text-white font-size-sm font-weight-bold">
                  <h5>
                    <i class="las la-binoculars"></i> Sighting probability
                  </h5>
                  <p className={animal.text}>{animal.probability}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="block d-flex justify-content-center align-items-center"
            href="#1"
          >
            <div className="block-content text-center block-content-full d-flex justify-content-center align-items-center">
              <div className="py-2">
                <div className="text-white font-size-sm font-weight-bold">
                  <h5>
                    <i class="las la-calendar"></i> Seasons
                  </h5>
                  {animal.season}
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
          <p>{animal.description}</p>
        </div>
        <div className="block-content bg-black-10">
          <div className="row text-center">
            <div className="col-sm-4 py-3 m-auto">
              <img
                class="img-fluid img-animal"
                src={animal.img}
                alt={animal.name}
              />
            </div>
            <div className="col-sm-4 py-3 m-auto">
              <img
                class="img-fluid img-animal "
                src={animal.img2}
                alt={animal.name}
              />
            </div>
            <div className="col-sm-4 py-3 m-auto">
              <img
                class="img-fluid img-animal "
                src={animal.img3}
                alt={animal.name}
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
            title={animal.name}
            src={animal.map}
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* <div className="block-content bg-black-10">
          <div className="row text-center">
            <div className="col-sm-4 py-3">
              <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                Page Views
              </div>
              <div className="text-black font-size-lg font-weight-bold">
                15.2m
              </div>
            </div>
            <div className="col-sm-4 py-3">
              <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                Conversion
              </div>
              <div className="text-black font-size-lg font-weight-bold">
                8.3%
              </div>
            </div>
            <div className="col-sm-4 py-3">
              <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                Visitors
              </div>
              <div className="text-black font-size-lg font-weight-bold">
                7.3m
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AnimalInfo;
