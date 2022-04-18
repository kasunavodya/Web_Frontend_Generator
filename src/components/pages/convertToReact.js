import React, { Component } from 'react'
import SideNavBar from '../navBar/sideNavBar';
import step1 from '../../assets/img/1.png';
import step2 from '../../assets/img/2.png';
import step3 from '../../assets/img/3.png';
import step4 from '../../assets/img/4.png';

export default class convertToReactPage extends Component {
    render() {
        return (
            <div>
                <body class="g-sidenav-show   bg-gray-100">
                    <div class="min-height-200 bg-primary position-absolute w-100"></div>
                    <SideNavBar />
                    <main class="main-content position-relative border-radius-lg ">
                        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl " id="navbarBlur" data-scroll="false">
                            <div class="container-fluid py-1 px-3">
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                                        <li class="breadcrumb-item text-sm"><a class="opacity-5 text-white" href="">Pages</a></li>
                                        <li class="breadcrumb-item text-sm text-white active" aria-current="page">Convert To React</li>
                                    </ol>
                                    <h6 class="font-weight-bolder text-white mb-0">Convert To React</h6>
                                </nav>
                                <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                                    <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                                        <div class="input-group">
                                            <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" placeholder="Type here..." />
                                        </div>
                                    </div>
                                    <ul class="navbar-nav  justify-content-end">
                                        <li class="nav-item d-flex align-items-center">
                                            <a href="javascript:;" class="nav-link text-white font-weight-bold px-0">
                                                <i class="fa fa-user me-sm-1"></i>
                                                <span class="d-sm-inline d-none">Sign In</span>
                                            </a>
                                        </li>
                                        <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                                            <a href="javascript:;" class="nav-link text-white p-0" id="iconNavbarSidenav">
                                                <div class="sidenav-toggler-inner">
                                                    <i class="sidenav-toggler-line bg-white"></i>
                                                    <i class="sidenav-toggler-line bg-white"></i>
                                                    <i class="sidenav-toggler-line bg-white"></i>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="nav-item px-3 d-flex align-items-center">
                                            <a href="javascript:;" class="nav-link text-white p-0">
                                                <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                                            </a>
                                        </li>
                                        <li class="nav-item dropdown pe-2 d-flex align-items-center">
                                            <a href="javascript:;" class="nav-link text-white p-0" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i class="fa fa-bell cursor-pointer"></i>
                                            </a>
                                            <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4" aria-labelledby="dropdownMenuButton">
                                                <li class="mb-2">
                                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                                        <div class="d-flex py-1">
                                                            <div class="my-auto">
                                                                <img src="../assets/img/team-2.jpg" class="avatar avatar-sm  me-3 " />
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="text-sm font-weight-normal mb-1">
                                                                    <span class="font-weight-bold">New message</span> from Laur
                                                                </h6>
                                                                <p class="text-xs text-secondary mb-0">
                                                                    <i class="fa fa-clock me-1"></i>
                                                                    13 minutes ago
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li class="mb-2">
                                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                                        <div class="d-flex py-1">
                                                            <div class="my-auto">
                                                                <img src="../assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm bg-gradient-dark  me-3 " />
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="text-sm font-weight-normal mb-1">
                                                                    <span class="font-weight-bold">New album</span> by Travis Scott
                                                                </h6>
                                                                <p class="text-xs text-secondary mb-0">
                                                                    <i class="fa fa-clock me-1"></i>
                                                                    1 day
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                                        <div class="d-flex py-1">
                                                            <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                                <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1">
                                                                    <title>credit-card</title>
                                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                                        <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fill-rule="nonzero">
                                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                                <g transform="translate(453.000000, 454.000000)">
                                                                                    <path class="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                                                                    <path class="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                            <div class="d-flex flex-column justify-content-center">
                                                                <h6 class="text-sm font-weight-normal mb-1">
                                                                    Payment successfully completed
                                                                </h6>
                                                                <p class="text-xs text-secondary mb-0">
                                                                    <i class="fa fa-clock me-1"></i>
                                                                    2 days
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <div class="container-fluid py-4">
                            <div class="row">
                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div class="card" style={{ flex: 1, backgroundColor: 'black' }}>
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        {/* <p class="text-sm mb-0 text-uppercase font-weight-bold">Today's Money</p> */}
                                                        <h5 class="font-weight-bolder" style={{ color: 'white' }}>
                                                            Browse XML File
                                                        </h5>
                                                        {/* <p class="mb-0">
                                                            <span class="text-success text-sm font-weight-bolder">+55%</span>
                                                            since yesterday
                                                        </p> */}
                                                    </div>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <div>
                                                        <img style={{ width: '40px', height: '40px' }} src={step1} class="navbar-brand-img h-100" alt="step1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div class="card" style={{ flex: 1, backgroundColor: 'black' }}>
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        <h5 class="font-weight-bolder" style={{ color: 'white' }}>
                                                            Convert to React
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <div>
                                                        <img style={{ width: '40px', height: '40px' }} src={step2} class="navbar-brand-img h-100" alt="step2" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div class="card">
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        <h5 class="font-weight-bolder">
                                                            Add CSS
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <div>
                                                        <img style={{ width: '40px', height: '40px' }} src={step3} class="navbar-brand-img h-100" alt="step3" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                    <div class="card">
                                        <div class="card-body p-3">
                                            <div class="row">
                                                <div class="col-8">
                                                    <div class="numbers">
                                                        <h5 class="font-weight-bolder">
                                                            Download Code
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="col-4 text-end">
                                                    <div>
                                                        <img style={{ width: '40px', height: '40px' }} src={step4} class="navbar-brand-img h-100" alt="step4" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div><br /><br /><br /><br /><br />
                                <div class="row">
                                    <div class="col-sm-6">
                                        <center><a href="#" class="btn btn-info col-12" style={{ color: 'white', fontSize: '16px' }}>Convert to React&nbsp;&nbsp;<i class="fas fa-code fa-lg"></i></a></center>
                                        <div class="card" style={{ height: '430px' }}>
                                            <div class="card-body">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <center><a href="#" class="btn btn-success col-12" style={{ color: 'white', fontSize: '16px' }}>Run&nbsp;&nbsp;<i class="fas fa-caret-right fa-lg"></i></a></center>
                                        <div class="card" style={{ height: '430px' }}>
                                            <div class="card-body">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div class="col-12 text-end">
                                <a class="btn bg-gradient-dark mb-0" href="/browse"><i class="fas fa-arrow-left"></i>&nbsp;&nbsp;Back</a>
                                &nbsp;&nbsp;&nbsp;
                                <a class="btn bg-gradient-dark mb-0" href="/addCss">Next&nbsp;&nbsp;<i class="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </main>
                </body>
            </div>
        )
    }
}