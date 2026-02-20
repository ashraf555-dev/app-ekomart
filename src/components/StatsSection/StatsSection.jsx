/**
 * Stats section: 4 metric cards (Happy Customers, Products, Salesman, Store).
 */
export default function StatsSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <div className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-around">
          <h2 className="text-3xl lg:text-4xl font-bold text-(--main-color) mb-1"> 60 M+</h2>
          <p className="text-(--secondary-color) font-medium text-sm lg:text-base">
            Happy<br />Customers
          </p>
        </div>
        <div className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-around">
          <h2 className="text-3xl lg:text-4xl font-bold text-(--main-color) mb-1"> 105 M+</h2>
          <p className="text-(--secondary-color) font-medium text-sm lg:text-base">
            Grocery<br />Products
          </p>
        </div>
        <div className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-around">
          <h2 className="text-3xl lg:text-4xl font-bold text-(--main-color) mb-1"> 80 K+</h2>
          <p className="text-(--secondary-color) font-medium text-sm lg:text-base">
            Active<br />Salesman
          </p>
        </div>
        <div className="text-center p-6 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-around">
          <h2 className="text-3xl lg:text-4xl font-bold text-(--main-color) mb-1"> 60 K+</h2>
          <p className="text-(--secondary-color) font-medium text-sm lg:text-base">
            Store<br />Worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
