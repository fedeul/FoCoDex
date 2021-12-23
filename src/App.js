import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <body>
      {/* <!-- Page Content --> */}
      <div id="page-container">
        {/* <!-- Header --> */}
        {/* <!-- Background by https://myphotopack.com --> */}
        <div
          className="bg-image"
          style="background-image: url('assets/media/various/bg-header.jpg');"
        >
          <div className="bg-image-overlay pt-5 py-md-5">
            <header className="container d-md-flex align-items-md-center justify-content-md-between py-4">
              <div className="text-center text-md-left py-2">
                <a
                  className="h5 text-white font-weight-bold d-flex align-items-center justify-content-center mb-0"
                  href="#1"
                >
                  <i className="fa far fa-compass text-light mr-2"></i> Dark Web
                  App
                </a>
              </div>
              <div className="text-center text-md-right py-2">
                <div className="dropdown">
                  <button
                    className="btn btn-link"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="avatar"
                      src="assets/media/various/avatar-000632.jpg"
                      alt="Admin Avatar"
                    />
                  </button>
                  <div
                    className="dropdown-menu dropdown-menu-right font-size-sm"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a className="dropdown-item" href="#1">
                      Profile
                    </a>
                    <a className="dropdown-item" href="#1">
                      Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#1">
                      Projects
                    </a>
                    <a className="dropdown-item" href="#1">
                      Tasks
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#1">
                      Log Out
                    </a>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        {/* <!-- END Header --> */}

        {/* <!-- Container --> */}
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              {/* <!-- Toggle Navigation Button --> */}
              <button
                type="button"
                className="btn btn-link btn-block d-lg-none mb-4"
                onclick="$('#navigation').toggleClassName('d-none');"
              >
                <i className="fa fa-fw fa-bars mr-1"></i> Navigation
              </button>

              {/* <!-- Navigation --> */}
              <div id="navigation" className="block d-none d-lg-block mr-lg-4">
                <div className="block-content">
                  <div className="font-size-sm text-uppercase text-light font-weight-bold mb-3">
                    Main
                  </div>
                  <ul className="nav-main mb-4">
                    <li className="nav-main-item">
                      <a className="nav-main-link active" href="#1">
                        <i className="fa fa-chart-line nav-main-icon"></i>
                        <span className="nav-main-text">Dashboard</span>
                      </a>
                    </li>
                    <li className="nav-main-item">
                      <a className="nav-main-link" href="#1">
                        <i className="fa fa-project-diagram nav-main-icon"></i>
                        <span className="nav-main-text">Projects</span>
                      </a>
                    </li>
                    <li className="nav-main-item">
                      <a className="nav-main-link" href="#1">
                        <i className="fa fa-user-friends nav-main-icon"></i>
                        <span className="nav-main-text">Customers</span>
                      </a>
                    </li>
                    <li className="nav-main-item">
                      <a className="nav-main-link" href="#1">
                        <i className="fa fa-euro-sign nav-main-icon"></i>
                        <span className="nav-main-text">Earnings</span>
                      </a>
                    </li>
                    <li className="nav-main-item">
                      <a className="nav-main-link" href="#1">
                        <i className="fa fa-file-invoice nav-main-icon"></i>
                        <span className="nav-main-text">Invoices</span>
                      </a>
                    </li>
                  </ul>
                  <div className="font-size-sm text-uppercase text-light font-weight-bold mb-3">
                    Account
                  </div>
                  <ul className="nav-main">
                    <li className="nav-main-item">
                      <a className="nav-main-link" href="#1">
                        <i className="fa fa-inbox nav-main-icon"></i>
                        <span className="nav-main-text">Inbox</span>
                      </a>
                    </li>
                    <li className="nav-main-item">
                      <a className="nav-main-link" href="#1">
                        <i className="fa fa-user-circle nav-main-icon"></i>
                        <span className="nav-main-text">Settings</span>
                      </a>
                    </li>
                    <li className="nav-main-item">
                      <a className="nav-main-link" href="#1">
                        <i className="fa fa-user-secret nav-main-icon"></i>
                        <span className="nav-main-text">Privacy</span>
                      </a>
                    </li>
                    <li className="nav-main-item">
                      <a className="nav-main-link" href="#1">
                        <i className="fa fa-flag-checkered nav-main-icon"></i>
                        <span className="nav-main-text">Notifications</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- END Navigation --> */}
            </div>
            <div className="col-lg-8 col-xl-9">
              {/* <!-- Stats --> */}
              <div className="row">
                <div className="col-sm-6 col-lg-4">
                  <a className="block" href="#1">
                    <div className="block-content block-content-full d-flex justify-content-between align-items-center">
                      <div className="py-2">
                        <div className="text-white font-size-lg font-weight-bold">
                          $16,450
                        </div>
                        <div className="text-muted text-uppercase font-size-sm font-weight-bold">
                          Income
                        </div>
                      </div>
                      <div className="font-weight-bold text-success font-size-sm py-2">
                        <i className="fa fa-caret-up mr-1"></i> 5.6%
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-sm-6 col-lg-4">
                  <a className="block" href="#1">
                    <div className="block-content block-content-full d-flex justify-content-between align-items-center">
                      <div className="py-2">
                        <div className="text-white font-size-lg font-weight-bold">
                          $2,600
                        </div>
                        <div className="text-muted text-uppercase font-size-sm font-weight-bold">
                          Expenses
                        </div>
                      </div>
                      <div className="font-weight-bold text-danger font-size-sm py-2">
                        <i className="fa fa-caret-up mr-1"></i> 2.4%
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-4">
                  <a className="block" href="#1">
                    <div className="block-content block-content-full d-flex justify-content-between align-items-center">
                      <div className="py-2">
                        <div className="text-white font-size-lg font-weight-bold">
                          $98,400
                        </div>
                        <div className="text-muted text-uppercase font-size-sm font-weight-bold">
                          Wallet
                        </div>
                      </div>
                      <div className="font-weight-bold text-success font-size-sm py-2">
                        <i className="fa fa-caret-up mr-1"></i> 1.3%
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!-- END Stats --> */}

              {/* <!-- Page views --> */}
              <div className="block">
                <div className="block-content bg-black-10">
                  <h3 className="font-size-sm text-muted font-weight-bold text-uppercase mb-0">
                    Page Views
                  </h3>
                </div>
                <div className="block-content">
                  <div className="p-4">
                    <canvas
                      className="js-chartjs-visitors"
                      height="320"
                    ></canvas>
                  </div>
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
              {/* <!-- END Page views --> */}

              {/* <!-- Projects --> */}
              <div className="block">
                <div className="block-content bg-black-10">
                  <h3 className="font-size-sm text-muted font-weight-bold text-uppercase mb-0">
                    Projects
                  </h3>
                </div>
                <div className="block-content">
                  <div className="table-responsive">
                    <table className="table table-dark table-borderless table-striped table-vcenter font-size-sm mb-0">
                      <thead>
                        <tr>
                          <th
                            className="text-center"
                            styleName="width: 40px;"
                          ></th>
                          <th>Name</th>
                          <th>Status</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center">5</td>
                          <td>
                            <a href="#1">
                              <strong>Project X</strong>
                            </a>
                            <p className="font-size-sm text-muted mb-0 d-none d-md-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-warning p-2">
                              Pending..
                            </span>
                          </td>
                          <td className="text-center">
                            <a className="btn btn-sm btn-link" href="#1">
                              <i className="fa fa-pencil-alt"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">4</td>
                          <td>
                            <a href="#1">
                              <strong>Project A</strong>
                            </a>
                            <p className="font-size-sm text-muted mb-0 d-none d-md-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-warning p-2">
                              Pending..
                            </span>
                          </td>
                          <td className="text-center">
                            <a className="btn btn-sm btn-link" href="#1">
                              <i className="fa fa-pencil-alt"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">3</td>
                          <td>
                            <a href="#1">
                              <strong>Project R</strong>
                            </a>
                            <p className="font-size-sm text-muted mb-0 d-none d-md-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-danger p-2">
                              Canceled
                            </span>
                          </td>
                          <td className="text-center">
                            <a className="btn btn-sm btn-link" href="#1">
                              <i className="fa fa-pencil-alt"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">2</td>
                          <td>
                            <a href="#1">
                              <strong>Project W</strong>
                            </a>
                            <p className="font-size-sm text-muted mb-0 d-none d-md-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-success p-2">
                              Completed
                            </span>
                          </td>
                          <td className="text-center">
                            <a className="btn btn-sm btn-link" href="#1">
                              <i className="fa fa-pencil-alt"></i>
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center">1</td>
                          <td>
                            <a href="#1">
                              <strong>Project K</strong>
                            </a>
                            <p className="font-size-sm text-muted mb-0 d-none d-md-block">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit..
                            </p>
                          </td>
                          <td>
                            <span className="badge badge-success p-2">
                              Completed
                            </span>
                          </td>
                          <td className="text-center">
                            <a className="btn btn-sm btn-link" href="#1">
                              <i className="fa fa-pencil-alt"></i>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="block-content bg-black-10">
                  <div className="row text-center">
                    <div className="col-sm-4 py-3">
                      <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                        Projects
                      </div>
                      <div className="text-black font-size-lg font-weight-bold">
                        285
                      </div>
                    </div>
                    <div className="col-sm-4 py-3">
                      <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                        Completed
                      </div>
                      <div className="text-black font-size-lg font-weight-bold">
                        89%
                      </div>
                    </div>
                    <div className="col-sm-4 py-3">
                      <div className="text-muted mb-2 text-uppercase font-size-sm font-weight-bold">
                        Clients
                      </div>
                      <div className="text-black font-size-lg font-weight-bold">
                        50
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- END Projects --> */}
            </div>
          </div>
        </div>
        {/* <!-- END Content --> */}

        {/* <!-- Footer --> */}
        <div className="bg-black-10">
          <footer className="container text-muted font-size-sm d-md-flex justify-content-md-between py-4">
            <div className="text-center text-md-left py-2">
              <strong>Dark Web App Dashboard</strong> &copy;{" "}
              <script>document.write((new Date()).getFullYear());</script>
            </div>
            <div className="text-center text-md-right py-2">
              Crafted with <i className="fa fa-heart text-danger"></i> by{" "}
              <a href="https://pixelcave.com">pixelcave</a>
            </div>
          </footer>
        </div>
        {/* <!-- END Footer --> */}
      </div>
      {/* <!-- END Page Content --> */}

      {/* <!-- Scripts --> */}
      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>

      {/* <!-- Custom JS --> */}
    </body>
  );
}

export default App;
