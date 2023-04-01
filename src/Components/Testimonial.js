import * as React from "react";
import Carousel from "framer-motion-carousel";
import "./home.css"
import "./home2.css"
import "https://kit.fontawesome.com/42d5adcbca.js"
import { Box } from "@chakra-ui/react";


const App = () => (
    <Box style={{ width: 600, height: 400 }} display="flex" alignItems={'center'} justifyContent={'center'}>
        <Carousel interval={4000} renderArrowLeft={null}>
            <div class="carousel-item active">
                <div >
                    <div class="row">
                        <div>
                            <img class="w-50 mb-4 avatar avatar-xl"
                                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg"
                                alt="" />
                            <p class="lead text-white">"We’re not always in the position that we want to be at.
                                We’re constantly growing. We’re constantly making mistakes. We’re constantly
                                trying to express ourselves and actualize our dreams." </p>
                            <div class="author justify-content-center">
                                <div class="name ps-2">
                                    <span class="text-white">John Down</span>
                                    <div class="stats">
                                        <small class="text-white opacity-6">Visionary, Google</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item active">
                <div>
                    <div class="row">
                        <div >
                            <img class="w-50 mb-4 avatar avatar-xl"
                                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg"
                                alt="" />
                            <p class="lead text-white">"We’re not always in the position that we want to be at.
                                We’re constantly growing. We’re constantly making mistakes. We’re constantly
                                trying to express ourselves and actualize our dreams." </p>
                            <div class="author justify-content-center">
                                <div class="name ps-2">
                                    <span class="text-white">John Down</span>
                                    <div class="stats">
                                        <small class="text-white opacity-6">Visionary, Google</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-item active">
                <div>
                    <div class="row">
                        <div >
                            <img class="w-50 mb-4 avatar avatar-xl"
                                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/team-4.jpg"
                                alt="" />
                            <p class="lead text-white">"We’re not always in the position that we want to be at.
                                We’re constantly growing. We’re constantly making mistakes. We’re constantly
                                trying to express ourselves and actualize our dreams." </p>
                            <div class="author justify-content-center">
                                <div class="name ps-2">
                                    <span class="text-white">John Down</span>
                                    <div class="stats">
                                        <small class="text-white opacity-6">Visionary, Google</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Carousel>
    </Box >
);
export default App;