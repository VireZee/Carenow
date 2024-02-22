import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ChakraProvider, Box, Input, Select, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import axios from 'axios';

const TreatmentForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/submit', data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <ChakraProvider>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box p={8}>
                    <FormControl mb={4} isInvalid={errors.patientName}>
                        <FormLabel>Patient Name</FormLabel>
                        <Input {...register('patientName', {
                            required: 'Patient name is required', pattern: {
                                value: /^[A-Za-z\s]+$/,
                                message: 'Patient name cannot contain numbers',
                            }
                        })} />
                        <FormErrorMessage>{errors.patientName && errors.patientName.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isInvalid={errors.patientId}>
                        <FormLabel>Patient ID</FormLabel>
                        <Input type="number" {...register('patientId', { required: 'Patient ID is required' })} />
                        <FormErrorMessage>{errors.patientId && errors.patientId.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isInvalid={errors.date}>
                        <FormLabel>Date of Treatment</FormLabel>
                        <Input type="date" {...register('date', { required: 'Select Date of Treatment' })} />
                        <FormErrorMessage>{errors.date && errors.date.message}</FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isInvalid={errors.treatmentDescription}>
                        <FormLabel>Treatment Description</FormLabel>
                        <Controller
                            control={control}
                            name="treatmentDescription"
                            rules={{ required: 'Please select Treatment Description' }}
                            render={({ field }) => (
                                <Select {...field} placeholder="Select Treatment Description">
                                    <option value="c1">Class 1</option>
                                    <option value="c2">Class 2</option>
                                    <option value="C3">Class 3</option>
                                </Select>
                            )}
                        />
                        <FormErrorMessage>
                            {errors.treatmentDescription && errors.treatmentDescription.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isInvalid={errors.medicationPrescribed}>
                        <FormLabel>Medications Prescribed</FormLabel>
                        <Controller
                            control={control}
                            name="medicationPrescribed"
                            rules={{ required: 'Please select Medication Prescribed' }}
                            render={({ field }) => (
                                <Select {...field} placeholder="Select Medication Prescribed">
                                    <option value="m1">Medication 1</option>
                                    <option value="m2">Medication 2</option>
                                    <option value="m3">Medication 3</option>
                                </Select>
                            )}
                        />
                        <FormErrorMessage>
                            {errors.medicationPrescribed && errors.medicationPrescribed.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isInvalid={errors.cost}>
                        <FormLabel>Cost of Treatment</FormLabel>
                        <Input type="number" {...register('cost', { required: 'Input costs' })} />
                        <FormErrorMessage>{errors.cost && errors.cost.message}</FormErrorMessage>
                    </FormControl>
                    <Button type="submit" colorScheme="teal" mt={4}>
                        Submit
                    </Button>
                </Box>
            </form>
        </ChakraProvider>
    );
};
export default TreatmentForm;