import { Button, Container, OrderCard } from "@/components"
import React from "react"

export default function Account() {
  return (
    <section>
      <Container className="flex gap-6">

        <div className="w-4/12">

          <div className="grid justify-center text-center">
            <div className="rounded-full overflow-clip w-50 aspect-square">
              <img src="/.temp/images/category.jpg" alt="" />
            </div>
            <p>Luna Store</p>
            <p>try@example.com</p>
          </div>

          <nav>
            <ul className="grid gap-4">
              <li className="bg-helper5 rounded-lg px-4 py-2">Personal Information</li>
              <li className="bg-helper5 rounded-lg px-4 py-2">Order History</li>
              <li className="bg-helper5 rounded-lg px-4 py-2">My Addresses</li>
              <li className="bg-helper5 rounded-lg px-4 py-2">Billing and Payments</li>
              <li className="bg-helper5 rounded-lg px-4 py-2">Customer support</li>
            </ul>
          </nav>

          <Button className="bg-c-4 w-fit mt-6 mx-auto">Logout</Button>
        </div>

        <div className="w-8/12">
          <h2 className="text-l4 text-center">Order History</h2>
          <div className="grid gap-4">
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </div>
        </div>

      </Container>
    </section>

  )
}
