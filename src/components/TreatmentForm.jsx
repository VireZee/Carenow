import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ChakraProvider, Box, Input, Button, FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import SelectComponent from 'react-select';
import axios from 'axios';

const TreatmentForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const tD = data.treatmentDescription.map(option => option.value);
            const mP = data.medicationPrescribed.map(option => option.value);
            const response = await axios.post('http://localhost:5000', { ...data, treatmentDescription: tD, medicationPrescribed: mP });
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
                            rules={{ required: 'Please select at least 1 Treatment Description' }}
                            render={({ field }) => (
                                <SelectComponent
                                    placeholder="Select Treatment Description"
                                    {...field}
                                    isMulti
                                    isSearchable={false}
                                    options={[
                                        { value: 'Treatment 1', label: 'Treatment 1' },
                                        { value: 'Treatment 2', label: 'Treatment 2' },
                                        { value: 'Treatment 3', label: 'Treatment 3' },
                                        { value: 'Treatment 4', label: 'Treatment 4' },
                                        { value: 'Treatment 5', label: 'Treatment 5' },
                                    ]}
                                />
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
                            rules={{ required: 'Please select at least 1 Medication Prescribed' }}
                            render={({ field }) => (
                                <SelectComponent
                                    placeholder="Select Medication Description"
                                    {...field}
                                    isMulti
                                    isSearchable={false}
                                    options={[
                                        { value: 'Medication 1', label: 'Medication 1' },
                                        { value: 'Medication 2', label: 'Medication 2' },
                                        { value: 'Medication 3', label: 'Medication 3' },
                                        { value: 'Medication 4', label: 'Medication 4' },
                                        { value: 'Medication 5', label: 'Medication 5' },
                                    ]}
                                />
                            )}
                        />
                        <FormErrorMessage>
                            {errors.medicationPrescribed && errors.medicationPrescribed.message}
                        </FormErrorMessage>
                    </FormControl>
                    <FormControl mb={4} isInvalid={errors.cost}>
                        <FormLabel>Cost of Treatment</FormLabel>
                        <Input type="number" step={0.01} {...register('cost', { required: 'Input costs' })} />
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