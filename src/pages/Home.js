import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import testImg from './../images/test-img.png'

AOS.init()

export default () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    })
  }, [])

  return (
    <main className="w-screen min-h-screen bg-green-500">
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="h-96"></div>
      <div className="container mx-auto px-4">
        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="hidden md:block md:w-1/2 px-4">
              <div
                data-aos="fade-up"
                className="h-full w-full bg-cover rounded shadow-xl fadei-in"
                style={{
                  backgroundImage: `url(https://source.unsplash.com/random/1280x720)`,
                }}
              ></div>
            </div>
            <div className="md:w-1/2 h-auto px-4">
              <div className="mb-8">
                <img
                  className="rounded shadow-xl"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded shadow-xl"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/2 px-4 mb-8 md:mb-0" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/2 px-4 mb-8 md:mb-0" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="pt-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/3 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="flex flex-wrap -mx-4 -mb-8" data-aos="fade-up">
            <div className="md:w-1/4 px-4 mb-8">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8" data-aos="fade-up">
              <img
                className="rounded shadow-xl"
                src="https://source.unsplash.com/random/1280x720"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
