/**
 * Promotional strip at bottom of About page.
 * Reuses shared info strip layout (payment, stocks, quality, delivery).
 */
import InfoStripSection from "../ui/InfoStripSection";
import { INFO_STRIP_ITEMS } from "../../data/infoStripData";

export default function OfferStripSection() {
  return <InfoStripSection items={INFO_STRIP_ITEMS} />;
}
