  import React from 'react'
  import {useForm } from "react-hook-form"
  import PropTypes from 'prop-types'
  import { Button } from "@/components/ui/button"; 
  import {Input } from "@/components/ui/input"

  export default function SearchForm( {onSearch}) {
    const {
    register,
    handleSubmit,
    reset, 
    formState: { errors },
  } = useForm();

    const onSubmit = ({ city }) => {
      if (!city) return;
      onSearch(city.trim());
      reset(); // clear input
    };
      
    
    return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto p-4 bg-background rounded-md shadow-md"
  >
    <Input
      type="text"
      placeholder="Enter city name"
      {...register("city", { required: "City is required" })}
      className="flex-1 border border-border px-4 py-2"
    />
    <Button type="submit">Search</Button>

    {errors.city && (
      <p className="text-sm text-red-500 mt-1 sm:ml-2">
        {errors.city.message}
      </p>
    )}
  </form>
    );
  }
    SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

