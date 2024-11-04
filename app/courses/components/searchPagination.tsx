"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

type PaginationProps = {
  meta: {
    page: number;
    perPage: number;
    totalItems: number;
  };
};

const CoursePagination: React.FC<PaginationProps> = ({ meta }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(meta.totalItems / meta.perPage);

  const goToPage = (page: number) => {
    const keywords = searchParams.get("keywords");
    let url = `${pathname}?page=${page}`;
    if (keywords) {
      url += `&keywords=${encodeURIComponent(keywords)}`;
    }
    router.push(url);
  };

  const pageLinks = [];
  for (let i = 1; i <= totalPages; i++) {
    pageLinks.push(
      <PaginationItem key={i}>
        <PaginationLink
          href="#"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            goToPage(i);
          }}
          aria-current={meta.page === i ? "page" : undefined}
          className={
            meta.page === i
              ? "border border-edunity-primary text-edunity-primary"
              : undefined
          }
        >
          {i}
        </PaginationLink>
      </PaginationItem>
    );
  }

  return (
    <Pagination>
      <PaginationContent>
        {pageLinks}
      </PaginationContent>
    </Pagination>
  );
};

export default CoursePagination;
