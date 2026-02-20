/**
 * Shared data for the promotional info strip (payment, stocks, quality, delivery).
 * Used by: Shop, Login, Register, WeeklyBestSeller, OfferStripSection.
 * Icons are React elements; rendered by InfoStripSection component.
 */
import { GiReceiveMoney } from "react-icons/gi";
import { FaHandshake } from "react-icons/fa6";
import { IoDiamondOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const ICON_SIZE = 28;

export const INFO_STRIP_ITEMS = [
  {
    icon: <GiReceiveMoney size={ICON_SIZE} />,
    title: "Payment Only Online",
    desc: "We prepared special discounts you on grocery products.",
  },
  {
    icon: <FaHandshake size={ICON_SIZE} />,
    title: "Everyday New Stocks",
    desc: "We prepared special discounts you on grocery products.",
  },
  {
    icon: <IoDiamondOutline size={ICON_SIZE} />,
    title: "Best Quality Assurance",
    desc: "We prepared special discounts you on grocery products.",
  },
  {
    icon: <TbTruckDelivery size={ICON_SIZE} />,
    title: "Delivery Within 30 Mins",
    desc: "We prepared special discounts you on grocery products.",
  },
];
