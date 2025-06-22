import { Box, Heading, Stack, Text, Divider } from '@chakra-ui/react'
import { supabase } from 'lib/supabaseClient'
import { useEffect, useState } from 'react'
import { useAuth } from 'contexts/AuthContext'
import RequireAuth from 'components/guards/RequireAuth'

interface OrderItem {
  id: number
  product_id: number
  quantity: number
  unit_price: number
  product?: {
    name: string
    short_name: string
    images?: {
      cart?: string
    }
  }
}

interface Order {
  id: number
  total: number
  created_at: string
  items: OrderItem[]
}

const OrdersPageContent = (): JSX.Element => {
  const { user } = useAuth()
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    if (!user) return
    const fetchOrders = async () => {
      const { data, error } = await supabase
        .from('orders')
        .select(`id,total,created_at,items:order_items(id,product_id,quantity,unit_price,product:product_id(name,short_name,images))`)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
      if (!error && data) {
        setOrders(data as unknown as Order[])
      }
    }
    fetchOrders()
  }, [user])

  if (!orders.length)
    return (
      <Box maxW="xl" mx="auto" mt={10} p={6} bg="white" borderRadius="md" textAlign="center">
        <Text>No orders yet.</Text>
      </Box>
    )

  return (
    <Box maxW="xl" mx="auto" mt={10} p={6} bg="white" borderRadius="md">
      <Heading size="md" mb={4} textAlign="center">
        My Orders
      </Heading>
      <Stack spacing={6}>
        {orders.map(order => (
          <Box key={order.id}>
            <Text fontWeight="bold">Order #{order.id}</Text>
            <Text fontSize="sm" color="gray.600" mb={2}>
              {new Date(order.created_at).toLocaleString()}
            </Text>
            {order.items.map(item => {
              const lineTotal = item.unit_price * item.quantity
              const imgSrc = item.product?.images?.cart ?? '/images/placeholder.png'
              return (
                <HStack key={item.id} ml={4} mb={2} alignItems="center" spacing={4}>
                  <Box boxSize="3rem" flexShrink={0} borderRadius="md" overflow="hidden" bg="gray.100">
                    <img src={imgSrc} alt={item.product?.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </Box>
                  <Box flex="1">
                    <Text fontWeight="bold">{item.product?.name ?? `Product ${item.product_id}`}</Text>
                    <Text fontSize="sm" color="gray.600">
                      {item.quantity} × ${item.unit_price}
                    </Text>
                  </Box>
                  <Text fontWeight="bold">${lineTotal}</Text>
                </HStack>
              )
            })}
            <Divider mt={2} />
            <Text mt={2} textAlign="right" fontWeight="bold">
              Total: ${order.total}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}

const OrdersPage = (): JSX.Element => (
  <RequireAuth>
    <OrdersPageContent />
  </RequireAuth>
)

export default OrdersPage
