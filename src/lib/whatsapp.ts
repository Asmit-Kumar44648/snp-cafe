export const phone = "917061885890";

export const getWhatsAppLink = (message: string) => {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const prefilledMessages = {
  party: "Hi SNP! I'd like to book a space for a party.\nName: \nDate: \nPeople: \nOccasion: ",
  franchise: "Hi SNP! I'm interested in franchise.\nName: \nCity: \nPhone: \nBudget: ",
  order: (item: string) => `Hi! I'd like to order: ${item} from SNP Cafe.`,
  general: "Hi SNP! I have an enquiry.",
  collab: "Hi SNP! I'm interested in collaborating.\nBrand/Event: \nDetails: ",
};
