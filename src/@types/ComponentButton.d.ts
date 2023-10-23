interface ButtonProps {
  title: string;
  text: string;
  active: boolean;
  content: {
    sale_challenger: string;
    cost_challenger: string;
    personalization_challenger: string;
  };
  onGetButtonContent: (
    title: string,
    text: string,
    sale_challenger: string,
    cost_challenger: string,
    personalization_challenger: string
  ) => void;
}
