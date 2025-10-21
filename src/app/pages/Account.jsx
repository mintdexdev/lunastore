import { Button, Container, OrderCard } from "@/components"
import React from "react"

const navList = ["Account Details", "Order History", "Billing and Payments", "Customer support", "Settings"]
export default function Account() {
  return (
    <section>
      <Container className="flex gap-6">

        <div className="w-4/12">

          <div className="mb-8 grid justify-center text-center">
            <div className="rounded-full overflow-clip w-50 aspect-square">
              <img src="/.temp/images/category.jpg" alt="" />
            </div>
            <p>Luna Store</p>
            <p>try@example.com</p>
          </div>

          <nav>
            <ul className="grid">
              {navList.map(item => (
                <li className="rounded-xl px-[13px] py-2.5 hover-bg-helper5"
                  key={item}
                >{item}
                </li>
              ))}
            </ul>
          </nav>

        </div>

        <div className="w-8/12">
          <h1 className="text-l4 mb-4 text-center">Order History</h1>
          <div className="grid">
            <div className="grid gap-4 border p-4 rounded-4xl">
              <OrderCard />
              <OrderCard />
              <OrderCard />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}