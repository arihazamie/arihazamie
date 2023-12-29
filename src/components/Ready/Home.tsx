"use client";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "../../app/globals.css";

const Home = () => {
  return (
    <Tabs
      defaultValue="1"
      className="w-[45rem]">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="1">Home</TabsTrigger>
        <TabsTrigger value="2">Resume</TabsTrigger>
        <TabsTrigger value="3">Portfolio</TabsTrigger>
        <TabsTrigger value="4">Contact</TabsTrigger>
        <TabsTrigger value="5">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="1">
        <Card></Card>
      </TabsContent>
      <TabsContent value="2">
        <Card></Card>
      </TabsContent>
      <TabsContent value="3">
        <Card></Card>
      </TabsContent>
      <TabsContent value="4">
        <Card></Card>
      </TabsContent>
      <TabsContent value="5">
        <Card></Card>
      </TabsContent>
    </Tabs>
  );
};

export default Home;
