drop table if exists public.cliente cascade;
create table public.cliente (
    id bigserial unique,
    nome text,
    email text,
    telefone text
)

drop table if exists public.compra cascade;
create table public.compra (
    id bigserial,
    id_client bigint references public.cliente(id) not null,
    data_compra date default now(),
    valor_total decimal
);

