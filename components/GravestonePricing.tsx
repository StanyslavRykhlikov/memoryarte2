'use client'

import React, {useState} from 'react'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card'
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert'
import {AlertCircle} from 'lucide-react'
import {calculateEngravingPrice, isValidDimensions} from '@/utils/pricing'

const GravestonePricing: React.FC = () => {
    const [width, setWidth] = useState<number>(60)
    const [height, setHeight] = useState<number>(60)
    const [price, setPrice] = useState<number | null>(null)
    const [isInvalid, setIsInvalid] = useState(false)

    const handleCalculate = () => {
        if (typeof width === 'number' && typeof height === 'number') {
            if (isValidDimensions(width, height)) {
                setPrice(calculateEngravingPrice(width, height))
                setIsInvalid(false)
            } else {
                setPrice(null)
                setIsInvalid(true)
            }
        }
    }

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Calculadora de costo de lápidas</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="width" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Ancho (cm)
                        </label>
                        <Input
                            id="width"
                            type="number"
                            value={width}
                            onChange={(e) => setWidth(Number(e.target.value))}
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <label htmlFor="height" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Alto (cm)
                        </label>
                        <Input
                            id="height"
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(Number(e.target.value))}
                            className="mt-1"
                        />
                    </div>
                    <Button onClick={handleCalculate} className="w-full">
                        Calcular el costo
                    </Button>
                    {price !== null && (
                        <div className="text-center text-lg font-semibold">
                            Costo: ${price}
                        </div>
                    )}
                    {isInvalid && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4"/>
                            <AlertTitle>Error:</AlertTitle>
                            <AlertDescription>
                                La fabricación de una lápida con esas dimensiones no es posible actualmente.
                                Las dimensiones máximas permitidas son: 60 cm x 120 cm o 120 cm x 60 cm.
                            </AlertDescription>
                        </Alert>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}

export default GravestonePricing

