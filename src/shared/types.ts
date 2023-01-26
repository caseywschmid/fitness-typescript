export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

// 
export interface BenefitType {
  icon: JSX.Element,
  title: string,
  text: string,
}

// There is a way to make things optional in your TS object types. Simply adding
// a question mark next to the key of what you want to make optional will make
// it not required
export interface ClassType {
  name: string,
  text?: string,
  image: string,
}







