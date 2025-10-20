import { Button, Divider, ProductCard } from "@/components";

export default function OrderCard() {
  return (
    <div className="border border-helper4 rounded-3xl p-4">

      <div className="flex">
        <div className="w-full">
          <h3 className="text-l1">Order #123457</h3>
          <p className="text-helper3">4Products | Luna store | 12:34, Nov10, 2025</p>
        </div>
        <div className="flex gap-4">
          <Button className="rounded-lg whitespace-nowrap"
            varient="outline">Download Invoice</Button>
            <div className="whitespace-nowrap underline">
              Options
            </div>
        </div>
      </div>

      <Divider className="my-4" />
      <div>

        <div className="flex gap-4">
          <div >
            <p>Status</p>
            <p>Payment Method</p>
            <p>Payment Status</p>
            <p>Total</p>
            <p>Delivery Address</p>
            <p>Contact Number</p>
          </div>
          <div >
            <p>Status</p>
            <p>Payment Method</p>
            <p>Payment Status</p>
            <p>Total</p>
            <p>Delivery Address</p>
            <p>Contact Number</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <ProductCard varient="order-history" />
          <ProductCard varient="order-history" />
          <ProductCard varient="order-history" />
          <ProductCard varient="order-history" />
        </div>

      </div>
    </div>
  )
}
