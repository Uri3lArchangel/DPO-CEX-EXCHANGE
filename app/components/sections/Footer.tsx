import Link from 'next/link'
import React from 'react'
import footer from '@/app/styles//portal/scss/index.module.scss'



const Footer = () => {
  return (
    <footer >
        <div className={footer.footerContainer}>
          <aside>
            <h4>Explore <span>Direct Private Offers</span> other available services</h4>
            <section>
              <ul>
                <figure>
                  <li>
                    <figcaption>
                      <h5>
                      Our official site - Lets Explore together
                      </h5>
                      <Link href={"https://directprivateoffers.net"} target="_blank">Explore</Link>
                    </figcaption>
                  </li>
                </figure>
                <figure>
                  <li>
                  <figcaption>
                      <h5>
                      DPO Central panel - Sit back and monitor a private process over a public blockchain
                      </h5>
                      <Link href={"https://dpo-central-pannel.vercel.app/"} target="_blank" >Go To</Link>
                    </figcaption>
                  </li>
                </figure>
              </ul>
            </section>
          </aside>
          </div>
        </footer>
  )
}

export default Footer