import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CustomDateTimePickerProps {
    date?: string; // in ms
    onDateChange: (timestamp: string) => void; // in ms
}

export default function CustomDateTimePicker({ date, onDateChange }: CustomDateTimePickerProps) {
    const [isOpen, setIsOpen] = useState(false);

    const parsedDate = date ? new Date(parseInt(date)) : undefined;
    const hours = Array.from({ length: 24 }, (_, i) => i);

    const handleDateChange = (newDate: Date) => {
        const unixMillis = newDate.getTime().toString();
        onDateChange(unixMillis);
    };

    const handleDateSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            const newDate = new Date(selectedDate);
            if (parsedDate) {
                newDate.setHours(parsedDate.getHours());
                newDate.setMinutes(parsedDate.getMinutes());
            }
            handleDateChange(newDate);
        }
    };

    const handleTimeChange = (type: "hour" | "minute", value: string) => {
        if (parsedDate) {
            const newDate = new Date(parsedDate);
            if (type === "hour") newDate.setHours(parseInt(value));
            else newDate.setMinutes(parseInt(value));
            handleDateChange(newDate);
        }
    };

    return (
        <Popover
            open={isOpen}
            onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn("flex-1 justify-start text-left font-normal", !parsedDate && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {parsedDate ? format(parsedDate, "MM/dd/yyyy HH:mm") : <span>MM/DD/YYYY hh:mm</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <div className="sm:flex">
                    <Calendar
                        mode="single"
                        selected={parsedDate}
                        onSelect={handleDateSelect}
                        autoFocus
                    />
                    <div className="flex flex-col sm:flex-row sm:h-[300px] divide-y sm:divide-y-0 sm:divide-x">
                        <ScrollArea className="w-64 sm:w-auto">
                            <div className="flex sm:flex-col p-2">
                                {hours.map((hour) => (
                                    <Button
                                        key={hour}
                                        size="icon"
                                        variant={parsedDate && parsedDate.getHours() === hour ? "default" : "ghost"}
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() => handleTimeChange("hour", hour.toString())}>
                                        {hour}
                                    </Button>
                                ))}
                            </div>
                            <ScrollBar
                                orientation="horizontal"
                                className="sm:hidden"
                            />
                        </ScrollArea>
                        <ScrollArea className="w-64 sm:w-auto">
                            <div className="flex sm:flex-col p-2">
                                {Array.from({ length: 12 }, (_, i) => i * 5).map((minute) => (
                                    <Button
                                        key={minute}
                                        size="icon"
                                        variant={parsedDate && parsedDate.getMinutes() === minute ? "default" : "ghost"}
                                        className="sm:w-full shrink-0 aspect-square"
                                        onClick={() => handleTimeChange("minute", minute.toString())}>
                                        {minute.toString().padStart(2, "0")}
                                    </Button>
                                ))}
                            </div>
                            <ScrollBar
                                orientation="horizontal"
                                className="sm:hidden"
                            />
                        </ScrollArea>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
