import PageTitle from "@/components/PageTitle";
import Card, { CardProps } from "@/components/Card";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";

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
    </div>
  );
}
