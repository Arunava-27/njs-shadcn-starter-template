import PageTitle from "@/components/PageTitle";
import Card, { CardProps, CardContent } from "@/components/Card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import BarChart from "@/components/BarChart";
import SalesCard, {SalesProps} from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$41,250.00",
    description: "+20.1% from last week",
    icon: DollarSign,
  },
  {
    label: "Total Users",
    amount: "1,600",
    description: "+5.25% from last week",
    icon: Users,
  },
  {
    label: "Total Orders",
    amount: "6,250",
    description: "+10.5% from last week",
    icon: CreditCard,
  },
  {
    label: "Total Sales",
    amount: "$15,300.00",
    description: "+5.25% from last week",
    icon: Activity,
  },
];

const userSalesData: SalesProps[] =[
  {
    name: "Arunava Kundu",
    email: "drarunkundu22@gmail.com",
    saleAmount: "$1,250.00",
  },
  {
    name: "Rahul Das",
    email: "rahuldas@gmail.com",
    saleAmount: "+$390.00",
  },
  {
    name: "Lola Basu",
    email: "basulola@gmail.com",
    saleAmount: "+$790.00",
  },
  {
    name: "Jayanta Das",
    email: "dasjayanta@gmail.com",
    saleAmount: "+$1450.00"
  },
  {
    name: "Kinkor Biswas",
    email: "biswaskinkor@gmail.com",
    saleAmount: "+$670.50"
  },
  {
    name: "Arjun Ghoshal",
    email: "ghoshalarjun@gmail.com",
    saleAmount: "+$540.95"
  },
  {
    name: "Saswata Da",
    email: "dasaswata@gmail.com",
    saleAmount: "+$450.45"
  },
  {
    name: "Sattu Paratha",
    email: "parathasattu@gmail.com",
    saleAmount: "+$1411.00"
  }
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      {/* cards */}
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-4 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
          <p className="px-4 pt-4 font-semibold">Recent Sales</p>
          <p className=" px-4 text-sm text-gray-400">You made 265 sales this month.</p>
          </section>
          {
            userSalesData.map((data, index) => (
              <SalesCard 
                key={index}
                email={data.email}
                name={data.name}
                saleAmount={data.saleAmount}
              />
            ))
          }
        </CardContent>
      </section>
    </div>
  );
}
