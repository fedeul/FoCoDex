const AnimalInfo = (props) => {
  const { animal } = props;
  return (
    <>
      <div key={animal.id} className="row">
        <div className="col-sm-6 col-lg-4">
          <div className="block" href="#1">
            <div className="block pt-3">
              <div class="ssc flex align-center justify-between ">
                <div class="ssc-wrapper">
                  <div class="flex align-center justify-between">
                    <div class="w-80">
                      <div class="ssc-line w-90"></div>
                      <div class="ssc-line w-60"></div>
                    </div>
                    <div class="w-20">
                      <div class="ssc-circle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-4">
          <div className="block">
            <div className="block-content text-center block-content-full d-flex justify-content-center align-items-center">
              <div className="py-2">
                <div className="text-white font-size-sm font-weight-bold">
                  <h5>
                    <i class="las la-binoculars"></i> Sighting probability
                  </h5>
                  <div class="ssc-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="block">
            <div className="block-content text-center block-content-full d-flex justify-content-center align-items-center">
              <div className="py-2">
                <div className="text-white font-size-sm font-weight-bold">
                  <h5>
                    <i class="las la-calendar"></i> Seasons
                  </h5>
                  <div class="ssc-line"></div>
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
              <div class="ssc-square"></div>
            </div>
            <div className="col-sm-4 py-3 m-auto">
              <div class="ssc-square"></div>
            </div>
            <div className="col-sm-4 py-3 m-auto">
              <div class="ssc-square"></div>
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
          <div class="ssc-square"></div>
        </div>
        <div className="block-content bg-black-10">
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
        </div>
      </div>
      {/* <!-- MAP views --> */}
    </>
  );
};

export default AnimalInfo;
