/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ewomqMxwNDd
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CreditCard, DollarSign, Wallet } from "lucide-react";

export default function Payment() {
	return (
		<div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto py-8 px-4">
			<div className="grid gap-6">
				<Card>
					<CardHeader>
						<CardTitle>Payment</CardTitle>
						<CardDescription>Enter your payment details</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid gap-2">
							<Label htmlFor="cardNumber">Card Number</Label>
							<Input id="cardNumber" placeholder="4111 1111 1111 1111" />
						</div>
						<div className="grid grid-cols-2 gap-4">
							<div className="grid gap-2">
								<Label htmlFor="expiration">Expiration</Label>
								<div className="grid grid-cols-2 gap-2">
									<Select>
										<SelectTrigger id="expiration-month">
											<SelectValue placeholder="MM" />
										</SelectTrigger>
										<SelectContent>
											{Array.from({ length: 12 }, (_, i) => (
												<SelectItem
													key={`month-${i + 1}`}
													value={(i + 1).toString()}
												>
													{i + 1}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<Select>
										<SelectTrigger id="expiration-year">
											<SelectValue placeholder="YY" />
										</SelectTrigger>
										<SelectContent>
											{Array.from({ length: 10 }, (_, i) => (
												<SelectItem
													key={`year-${i + 2023}`}
													value={(i + 2023).toString()}
												>
													{i + 2023}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="cvc">CVC</Label>
								<Input id="cvc" placeholder="123" />
							</div>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="cardholderName">Cardholder Name</Label>
							<Input id="cardholderName" placeholder="John Doe" />
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle>Payment Options</CardTitle>
						<CardDescription>
							Select your preferred payment method
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
							<div>
								<RadioGroupItem
									value="card"
									id="card"
									className="peer sr-only"
								/>
								<Label
									htmlFor="card"
									className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
								>
									<CreditCard className="mb-3 h-6 w-6" />
									Credit Card
								</Label>
							</div>
							<div>
								<RadioGroupItem
									value="digital-wallet"
									id="digital-wallet"
									className="peer sr-only"
								/>
								<Label
									htmlFor="digital-wallet"
									className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
								>
									<Wallet className="mb-3 h-6 w-6" />
									Digital Wallet
								</Label>
							</div>
							<div>
								<RadioGroupItem
									value="other"
									id="other"
									className="peer sr-only"
								/>
								<Label
									htmlFor="other"
									className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
								>
									<DollarSign className="mb-3 h-6 w-6" />
									Other
								</Label>
							</div>
						</RadioGroup>
					</CardContent>
				</Card>
			</div>
			<div className="grid gap-6">
				<Card>
					<CardHeader>
						<CardTitle>Order Summary</CardTitle>
						<CardDescription>Review your order details</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4">
						<div className="grid gap-2">
							<div className="flex items-center justify-between">
								<span>Subtotal</span>
								<span>$99.00</span>
							</div>
							<div className="flex items-center justify-between">
								<span>Shipping</span>
								<span>$5.00</span>
							</div>
							<div className="flex items-center justify-between">
								<span>Discount</span>
								<span>-$10.00</span>
							</div>
							<Separator />
							<div className="flex items-center justify-between font-medium">
								<span>Total</span>
								<span>$94.00</span>
							</div>
						</div>
						<div className="grid gap-2">
							<div className="flex items-center justify-between">
								<span>Items</span>
								<span>2</span>
							</div>
							<div className="flex items-center justify-between">
								<span>Delivery</span>
								<span>Standard (3-5 days)</span>
							</div>
						</div>
					</CardContent>
				</Card>
				<Button size="lg" className="w-full">
					Place Order
				</Button>
			</div>
		</div>
	);
}
